import React from "react";
import { ReactComponent as Icon } from "./assets/icon-search.svg";
import { Form, Field } from "formik";

const Search = ({ userSearch, error }) => {
  return (
    <div>
      <Form className="search">
        <Icon className="icon" />
        <Field name="searchTerm">
          {({ field, form }) => (
            <div class="input-wrapper">
              <input
                type="text"
                name="searchTerm"
                className="input"
                placeholder="Search GitHub username..."
                {...field}
              />
            </div>
          )}
        </Field>
        <button className="btn bold" type="submit">
          Search
        </button>
      </Form>
    </div>
  );
};

export default Search;
