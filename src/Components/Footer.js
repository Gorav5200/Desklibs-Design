import React from "react";
const listData = [
  {
    title: "Subjects",
    listItem: [
      "Business Management",
      "Art and Design",
      "Computer Science",
      "Education and Teaching",
      "Engineering",
      "Health and Medicine",
      "Humanities",
      "Mathematics",
      "Programming",
      "Science",
      "Social Science",
    ],
  },
  {
    title: "Pages",
    listItem: [
      "Homework Help",
      "Study Resources",
      "Blogs",
      "Writing",
      "Subscription",
    ],
  },
  {
    title: "Support",
    listItem: [
      "About Us",
      "Contact Us",
      "Copyright",
      "Terms Of Use",
      "Privacy Policy",
    ],
  },
];

const List = ({ title, listItem }) => {
  return (
    <div className="col-6 col-md-2 mb-3">
      <h5>{title}</h5>
      <br />
      <ul className="nav flex-column">
        {listItem.map((item) => {
          return (
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light ">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const renderIconProps = ({ iconName }) => {
  return {
    viewBox: "64 64 896 896",
    focusable: "false",
    "data-icon": iconName,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
  };
};

function Footer() {
  return (
    <div className=" text-light" style={{ background: "#141414" }}>
      <div className="container px-md-5 mx-auto">
        <footer className="py-5 px-md-3 ">
          <div className="row">
            {listData &&
              listData.map((item, _) => (
                <List title={item.title} listItem={item.listItem} />
              ))}

            <div className="col-md-4 mb-3 offset-md-1 text-center text-md-start">
              <h5>
                {" "}
                <span
                  role="img"
                  aria-label="whats-app"
                  className="anticon anticon-whats-app me-2"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="whats-app"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <defs>
                      <style></style>
                    </defs>
                    <path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-.4-13.7-.4-21.1-.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path>
                    <path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path>
                  </svg>
                </span>
                +1-312 997 5479
              </h5>
              <p>Chat with our experts. we are online and ready to help.</p>
              <div className="d-flex flex flex-sm-row w-100 gap-2  justify-content-center justify-content-md-start">
                <ul className="list-unstyled d-flex gap-3 fs-3   ">
                  <li>
                    <svg {...renderIconProps("facebook")}>
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                    </svg>
                  </li>
                  <li>
                    <svg {...renderIconProps("instagram")}>
                      <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z"></path>
                    </svg>
                  </li>
                  <li>
                    <a href="https://my.linkedin.com/company/desklib?trk=public_profile_topcard-current-company">
                      {" "}
                      <span
                        role="img"
                        aria-label="linkedin"
                        class="anticon anticon-linkedin text-decoration-none"
                      >
                        <svg {...renderIconProps("linkedIn")}>
                          <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.reddit.com/user/Desklib/">
                      {" "}
                      <span
                        role="img"
                        aria-label="reddit-square"
                        class="anticon anticon-reddit-square"
                      >
                        <svg {...renderIconProps("reddit-square")}>
                          <path d="M296 440a35.98 35.98 0 00-13.4 69.4c11.5-18.1 27.1-34.5 45.9-48.8A35.9 35.9 0 00296 440zm289.7 184.9c-14.9 11.7-44.3 24.3-73.7 24.3s-58.9-12.6-73.7-24.3c-9.3-7.3-22.7-5.7-30 3.6-7.3 9.3-5.7 22.7 3.6 30 25.7 20.4 65 33.5 100.1 33.5 35.1 0 74.4-13.1 100.2-33.5 9.3-7.3 10.9-20.8 3.6-30a21.46 21.46 0 00-30.1-3.6zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM757 541.9c4.6 13.5 7 27.6 7 42.1 0 99.4-112.8 180-252 180s-252-80.6-252-180c0-14.5 2.4-28.6 7-42.1A72.01 72.01 0 01296 404c27.1 0 50.6 14.9 62.9 37 36.2-19.8 80.2-32.8 128.1-36.1l58.4-131.1c4.3-9.8 15.2-14.8 25.5-11.8l91.6 26.5a54.03 54.03 0 01101.6 25.6c0 29.8-24.2 54-54 54-23.5 0-43.5-15.1-50.9-36.1L577 308.3l-43 96.5c49.1 3 94.2 16.1 131.2 36.3 12.3-22.1 35.8-37 62.9-37 39.8 0 72 32.2 72 72-.1 29.3-17.8 54.6-43.1 65.8zM584 548a36 36 0 1072 0 36 36 0 10-72 0zm144-108a35.9 35.9 0 00-32.5 20.6c18.8 14.3 34.4 30.7 45.9 48.8A35.98 35.98 0 00728 440zM368 548a36 36 0 1072 0 36 36 0 10-72 0z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/DesklibC/">
                      {" "}
                      <span
                        role="img"
                        aria-label="twitter-square"
                        class="anticon anticon-twitter-square"
                      >
                        <svg {...renderIconProps("twitter-square")}>
                          <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center">
              ©2023 | A2Z Pte.Ltd. | All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
