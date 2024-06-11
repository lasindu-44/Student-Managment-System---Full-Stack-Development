import React, { useState } from "react";
import "../Style/AddStudent.css";

function AddStudent() {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="col-md-6">
        <form>
          <div className="mb-3">
            <label for="Name" class="form-label">
              Name
            </label>
            <input
              type="Text"
              className="form-control"
              id="Name"
              placeholder="Enter Student Name"
            />
          </div>

          <div className="mb-3">
            <label for="Age" class="form-label">
              Age
            </label>
            <input
              type="Text"
              className="form-control"
              id="Age"
              placeholder="Enter Student Age"
            />
          </div>
          <div className="mb-3">
            <label for="Gender" class="form-label">
              Gender
            </label>
            <input
              type="Text"
              className="form-control"
              id="Gender"
              placeholder="Enter Student Gender"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
