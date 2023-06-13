import React, { useState } from "react";
import { createAvatar } from "@dicebear/core";
import { avataaars, funEmoji, initials } from "@dicebear/collection";
import "./../css/style.css";

function Generate() {
  const [name, setName] = useState("");
  const generateAvatar = async (e) => {
    e.preventDefault();
    const avatar = createAvatar(funEmoji, {
      seed: name,
    });

    // const svg = avatar.toString();
    const png = await avatar.png({});

    png.toFile("avatar.png");
    // console.log(name);
    // console.log(svg);
    // console.log("diklik");
  };
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row rounded-4 p-4 bg-white shadow box-area my-3 mx-1">
          <div className="col-md-12 right-box col-sm-12">
            <h4 className="my-3 fw-semibold text-slate-500">Hello, User</h4>
            <p className="text-slate-400">Enter your name to generate the photo</p>
            <form onSubmit={generateAvatar} className="text-slate-500">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder=""
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div id="notif"></div>
              <div className="d-grid">
                <button className="btn btn-outline-dark" id="login" type="submit">
                  Generate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generate;
