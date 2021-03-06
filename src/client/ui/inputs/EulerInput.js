import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Vector3Input.scss";
import NumericInput from "./NumericInput";
import THREE from "../../vendor/three";

const { RAD2DEG, DEG2RAD } = THREE.Math;

export default class EulerInput extends Component {
  static propTypes = {
    value: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      z: PropTypes.number
    }),
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    onChange: () => {}
  };

  onChange = (x, y, z) => {
    this.props.onChange(new THREE.Euler(x * DEG2RAD, y * DEG2RAD, z * DEG2RAD));
  };

  render() {
    const { value, onChange, ...rest } = this.props;

    const vx = value ? (value.x || 0) * RAD2DEG : 0;
    const vy = value ? (value.y || 0) * RAD2DEG : 0;
    const vz = value ? (value.z || 0) * RAD2DEG : 0;
    return (
      <div className={styles.inputGroup}>
        <div className={styles.label}>X:</div>
        <NumericInput {...rest} style={{ width: "22%" }} value={vx} onChange={x => this.onChange(x, vy, vz)} />
        <div className={styles.label}>Y:</div>
        <NumericInput {...rest} style={{ width: "22%" }} value={vy} onChange={y => this.onChange(vx, y, vz)} />
        <div className={styles.label}>Z:</div>
        <NumericInput {...rest} style={{ width: "22%" }} value={vz} onChange={z => this.onChange(vx, vy, z)} />
      </div>
    );
  }
}
