import React, { useEffect, useState, useRef, useMemo } from "react";
import { useWindowSize } from "@hybris-software/ui-kit";
// Styles
import Style from "./InputRangeSlider.module.css";

/**
 *
 * @param {object} props
 * @param {number} props.min
 * @param {number} props.max
 * @returns
 */
const InputRangeSlider = ({
  min = 0,
  max = 200,
  mainBarClassName = Style.totalBar,
  leftRangePointClassName = Style.leftRangePoint,
  rightRangePointClassName = Style.rightRangePoint,
  leftPointLabelClassName = Style.leftPointLabel,
  rightPointLabelClassName = Style.rightPointLabel,
  rangeBarClassName = Style.rangeBar,
  onInputSliderMove = () => {},
  onPointsCollide = () => {},
  onLeftPointMouseDown = () => {},
  onRightPointMouseDown = () => {},
  onReachingMaximumRange = () => {},
  onReachingMaximumValue = () => {},
  onReachingMinimumValue = () => {},
}) => {
  const windowSize = useWindowSize();

  //States
  const [mouseDown, setMouseDown] = useState({ min: null, max: null });
  const [componentWidth, setComponentWidth] = useState(1);
  const [currentValue, setCurrentValue] = useState({ min: min, max: max });

  //Refs
  const totalBarRef = useRef(null);

  //State refs
  const currentValueRef = useRef(currentValue);
  const rangePositionRef = useRef({ min: 0, max: 0 });
  const mouseDownRef = useRef({ min: null, max: null });

  //Memos
  const rangePosition = useMemo(() => {
    const rangeBetweenMaxMin = max - min;
    const pixelsPerUnit = totalBarRef.current
      ? totalBarRef.current.clientWidth / rangeBetweenMaxMin
      : 1;
    return {
      min:
        (currentValue.min * componentWidth) / rangeBetweenMaxMin -
        min * pixelsPerUnit,
      max:
        (currentValue.max * componentWidth) / rangeBetweenMaxMin -
        min * pixelsPerUnit,
    };
  }, [currentValue, componentWidth]);

  //Side effects
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    //touch
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      //touch
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onMouseUp);
    };
  }, []);
  useEffect(() => {
    setComponentWidth(totalBarRef.current.clientWidth);
  }, [windowSize.width]);

  //Ref updates
  useEffect(() => {
    rangePositionRef.current = rangePosition;
  }, [rangePosition]);

  useEffect(() => {
    // On Points Collide Event
    if (
      currentValue.min === currentValue.max &&
      (currentValue.min !== currentValueRef.current.min ||
        currentValue.max !== currentValueRef.current.max)
    ) {
      onPointsCollide(currentValueRef.current);
    }
    // On Reaching Maximum Range Event
    if (
      currentValue.min === min &&
      currentValue.max === max &&
      (currentValue.min !== currentValueRef.current.min ||
        currentValue.max !== currentValueRef.current.max)
    ) {
      onReachingMaximumRange(currentValueRef.current);
    }

    currentValueRef.current = currentValue;
    onInputSliderMove(currentValueRef.current);
  }, [currentValue]);

  useEffect(() => {
    mouseDownRef.current = mouseDown;
  }, [mouseDown]);

  //Functions
  function bulletPos(key, xPos) {
    let _min = min;
    let _max = max;
    if (key == "min") {
      _max = currentValueRef.current.max;
    } else if (key == "max") {
      _min = currentValueRef.current.min;
    }

    const rangeBetweenMaxMin = max - min;
    const pixelsPerUnit = totalBarRef.current.clientWidth / rangeBetweenMaxMin;
    const movementOffset = xPos - mouseDownRef.current[key].position;
    const valueOffset = movementOffset / pixelsPerUnit;
    let newValue = valueOffset + mouseDownRef.current[key].value;

    newValue = Math.min(_max, newValue);
    newValue = Math.max(_min, newValue);
    if (
      newValue === min &&
      currentValueRef.current.min !== min &&
      key === "min"
    ) {
      onReachingMinimumValue({ ...currentValueRef.current, min: newValue });
    }
    if (
      newValue === max &&
      currentValueRef.current.max !== max &&
      key === "max"
    ) {
      onReachingMaximumValue({ ...currentValueRef.current, max: newValue });
    }

    setCurrentValue((oldValue) => ({
      ...oldValue,
      [key]: newValue,
    }));
  }

  //Listeners
  const onMouseMove = (e) => {
    if (mouseDownRef.current.min) bulletPos("min", e.screenX);
    if (mouseDownRef.current.max) bulletPos("max", e.screenX);
  };

  const onTouchMove = (e) => {
    if (mouseDownRef.current.min) bulletPos("min", e.changedTouches[0].screenX);
    if (mouseDownRef.current.max) bulletPos("max", e.changedTouches[0].screenX);
  };

  const onMouseUp = (e) => {
    setMouseDown({ min: null, max: null });
  };

  const onMouseDownMin = (e) => {
    setMouseDown((oldValue) => ({
      ...oldValue,
      min: { position: e.screenX, value: currentValueRef.current.min },
    }));
    onLeftPointMouseDown(currentValueRef.current);
  };

  const onMouseDownMax = (e) => {
    setMouseDown((oldValue) => ({
      ...oldValue,
      max: { position: e.screenX, value: currentValueRef.current.max },
    }));
    onRightPointMouseDown(currentValueRef.current);
  };

  const onTouchStartMin = (e) => {
    setMouseDown((oldValue) => ({
      ...oldValue,
      min: {
        position: e.changedTouches[0].screenX,
        value: currentValueRef.current.min,
      },
    }));
  };

  const onTouchStartMax = (e) => {
    setMouseDown((oldValue) => ({
      ...oldValue,
      max: {
        position: e.changedTouches[0].screenX,
        value: currentValueRef.current.max,
      },
    }));
  };

  return (
    <div style={{ overflow: "hidden", padding: "20px" }}>
      <div className={mainBarClassName} ref={totalBarRef}>
        <div
          onMouseDown={onMouseDownMin}
          onTouchStart={onTouchStartMin}
          className={leftRangePointClassName}
          style={{ left: rangePosition.min }}
        ></div>
        <div
          className={leftPointLabelClassName}
          style={{ left: rangePosition.min }}
        >
          {Math.round(currentValue.min)}
        </div>
        <div
          onMouseDown={onMouseDownMax}
          onTouchStart={onTouchStartMax}
          className={rightRangePointClassName}
          style={{ left: rangePosition.max }}
        ></div>
        <div
          className={rightPointLabelClassName}
          style={{ left: rangePosition.max, bottom: "-30px" }}
        >
          {currentValue.max.toFixed(2)}
        </div>
        <div
          className={rangeBarClassName}
          style={{
            left: rangePosition.min,
            width: rangePosition.max - rangePosition.min,
          }}
        ></div>
      </div>
    </div>
  );
};

export default InputRangeSlider;
