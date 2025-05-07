import contactImg from "../assets/veridian-kitchen.jpg";

function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("contact-wrapper");

  const contactData = [
    {
      heading: "Reservations",
      text: [
        "Call us at (555) 123-4567 to reserve a table.",
        "Bookings available at restaurant.",
      ],
    },
    {
      heading: "Hours of Operation",
      text: [
        "Monday - Thursday: 12 PM – 9 PM",
        "Friday - Saturday: 12 PM – 11 PM",
        "Sunday: Closed",
      ],
    },
    {
      heading: "Location",
      text: [
        "123 Green Avenue",
        "Villa Verde, TX 98765",
        "Parking available behind the restaurant.",
      ],
    },
  ];

  contactData.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("content-section");

    const heading = document.createElement("h2");
    heading.classList.add("contact-heading");
    heading.textContent = section.heading;

    sectionDiv.appendChild(heading);

    section.text.forEach((line) => {
      const paragraph = document.createElement("p");
      paragraph.classList.add("contact-text");
      paragraph.textContent = line;
      sectionDiv.appendChild(paragraph);
    });

    contactWrapper.appendChild(sectionDiv);
  });

  content.appendChild(contactWrapper);

  const contactImage = document.createElement("img");
  contactImage.src = contactImg;

  content.appendChild(contactImage);
}

export default loadContact;
