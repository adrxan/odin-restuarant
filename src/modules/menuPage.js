const menuData = [
  {
    title: "Beginnings",
    items: [
      { name: "Oyster Trio", description: "Mignonette, lemon, horseradish" },
      {
        name: "Asparagus Velouté",
        description: "Parmesan foam, toasted almonds",
      },
      {
        name: "Beef Carpaccio",
        description: "Arugula, caper berries, truffle aioli",
      },
    ],
  },
  {
    title: "Main Courses",
    items: [
      {
        name: "Seared Scallops",
        description: "Butternut squash purée, brown butter sauce, sage",
      },
      {
        name: "Roasted Chicken Breast",
        description: "Morel mushroom ragout, potato gratin, green beans",
      },
      {
        name: "Grilled Swordfish",
        description: "Olive tapenade, roasted red peppers, couscous",
      },
      {
        name: "Wild Mushroom Tagliatelle",
        description: "Truffle cream, fresh parsley",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Pistachio Crème brûlée", description: "Biscotti" },
      { name: "Berry Clafoutis", description: "Vanilla ice cream" },
      {
        name: "Dark Chocolate Mousse",
        description: "Salted caramel, cocoa nibs",
      },
    ],
  },
];

function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-wrapper");

  menuData.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("menu-category");

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category.title;
    categoryTitle.classList.add("menu-title");
    categoryDiv.appendChild(categoryTitle);

    category.items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("menu-item");

      const itemName = document.createElement("h3");
      itemName.textContent = item.name;
      itemName.classList.add("item-name");

      const itemDesc = document.createElement("p");
      itemDesc.textContent = item.description;
      itemDesc.classList.add("item-desc");

      itemDiv.appendChild(itemName);
      itemDiv.appendChild(itemDesc);
      categoryDiv.appendChild(itemDiv);
    });

    menuWrapper.appendChild(categoryDiv);
  });
  content.appendChild(menuWrapper);
}

export default loadMenu;
