import { React, useState, useEffect } from "react";
import styles from "../styles/DropDown.module.css";

export default function DropDown(props) {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [displayedOptions, setDisplayedOptions] = useState(props.options);

  /* Filter function from https://dev.to/functional_js/write-a-custom-javascript-filter-function-that-is-60-faster-than-array-filter-4b66 */
  const fil = (fn, a) => {
    const f = []; //final
    for (let i = 0; i < a.length; i++) {
      if (fn(a[i])) {
        f.push(a[i]);
      }
    }
    return f;
  };

  useEffect(() => {
    if (searchText === "") {
      setDisplayedOptions(props.options);
    } else {
      // const newDisplayedOptions = props.options.filter((option) =>
      //   option.player.toLowerCase().includes(searchText.toLowerCase())
      // );
      const newDisplayedOptions = fil(
        (option) =>
          option.player.toLowerCase().includes(searchText.toLowerCase()),
        props.options
      );
      setDisplayedOptions(newDisplayedOptions);
    }
  }, [searchText, props.options]);

  return (
    <div id={styles.container} style={{ width: props.width + "em" }}>
      <div id={styles.top} onClick={() => setDropDownActive(!dropDownActive)}>
        <div id={styles.textContainer}>
          {props.mode === "player" &&
            (props.selectedOption
              ? `${props.selectedOption.player}, ${props.selectedOption.position}, ${props.selectedOption.season}`
              : props.emptyMessage)}
          {props.mode === "view" &&
            (props.selectedOption ? props.selectedOption : props.emptyMessage)}
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
        <div
          id={styles.bottom}
          onMouseLeave={() => {
            setDropDownActive(false);
          }}
        >
          {props.mode === "player" &&
            (props.options && props.options.length > 0 ? (
              <div
                id={styles.searchContainer}
                className="flex h-9 items-center justify-center"
              >
                <input
                  id={styles.searchInput}
                  className="w-full"
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
            ))}

          <div id={styles.dropDownOptions}>
            {displayedOptions.map((option) => {
              return (
                <div
                  key={option.id + option.season}
                  className={styles.dropDownOptionContainer}
                  onClick={() => {
                    props.toggleSelectedOption(option);
                  }}
                >
                  <p>
                    {props.mode === "player" &&
                      `${option.player}, ${option.position}, ${option.season}`}
                    {props.mode === "view" && option}
                  </p>
                  {props.mode === "player" &&
                    props.selectedOption &&
                    props.selectedOption.id === option.id && <span>✓</span>}
                  {props.mode === "view" &&
                    props.selectedOption &&
                    props.selectedOption === option && <span>✓</span>}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
