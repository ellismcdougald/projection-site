import { React, useState, useEffect } from "react";
import styles from "../styles/DropDown.module.css";

export default function DropDown(props) {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [displayedOptions, setDisplayedOptions] = useState(props.options);

  useEffect(() => {
    if (searchText === "") {
      setDisplayedOptions(props.options);
    } else {
      const newDisplayedOptions = props.options.filter((option) =>
        option.player.toLowerCase().includes(searchText.toLowerCase())
      );
      setDisplayedOptions(newDisplayedOptions);
    }
  }, [searchText, props.options]);

  return (
    <div id={styles.container}>
      <div id={styles.top} onClick={() => setDropDownActive(!dropDownActive)}>
        <div id={styles.textContainer}>
          {props.selectedOption
            ? `${props.selectedOption.player}, ${props.selectedOption.position}, ${props.selectedOption.season}`
            : props.emptyMessage}
        </div>
        <div id={styles.dropDownIconContainer}>
          <svg
            id={styles.dropDownIcon}
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
          </svg>
        </div>
      </div>
      {dropDownActive && (
        <div id={styles.bottom} onMouseLeave={() => setDropDownActive(false)}>
          {props.options.length > 0 ? (
            <div id={styles.searchContainer}>
              <input
                id={styles.searchInput}
                type="text"
                autoComplete="off"
                onChange={(e) => setSearchText(e.target.value)}
                autoFocus
                placeholder="Search"
              ></input>
            </div>
          ) : (
            <div
              className={styles.dropDownOptionContainer}
              id={styles.noOptionsDiv}
            >
              No Options
            </div>
          )}
          <div id={styles.dropDownOptions}>
            {displayedOptions.map((option) => {
              return (
                <div
                  key={option.id}
                  className={styles.dropDownOptionContainer}
                  onClick={() => {
                    props.toggleSelectedOption(option);
                  }}
                >
                  <p>
                    {`${option.player}, ${option.position}, ${option.season}`}
                  </p>
                  {props.selectedOption &&
                    props.selectedOption.id === option.id && <span>✓</span>}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
