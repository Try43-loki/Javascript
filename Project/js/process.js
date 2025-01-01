// Input Data

const formData = document.querySelector("#formData");
const inputName = document.querySelector("#fullname");
const owner = document.querySelector("#owner");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const phone = document.querySelector("#phone");
const category = document.querySelector("#categorys");
const companies = [];
formData.addEventListener("submit", (e) => {
  e.preventDefault();
  const company = {
    name: inputName.value,
    owner: owner.value,
    email: email.value,
    address: address.value,
    phone: phone.value,
    category: category.value,
  };
  companies.push(company);
})
document.addEventListener('DOMContentLoaded',()=>{
    renderCompany();
})
const renderCompany = () => {
    const tbody = document.querySelector("#tbody");
    if (!tbody) {
        console.error("Error: The element with id 'tbody' was not found.");
        return;
    }

    // Clear existing rows in the table body
    tbody.innerHTML = "";

    // Loop through the companies array to create table rows dynamically
    companies.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${item.name}</td>
          <td>${item.owner}</td>
          <td>${item.address}</td>
          <td>${item.email}</td>
          <td class="d-flex gap-2">
            <button
              class="btn btn-sm btn-primary btn-view"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              View
            </button>
            <button
              class="btn btn-sm btn-success btn-update"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Update
            </button>
            <button class="btn btn-sm btn-danger btn-delete">
              Delete
            </button>
          </td>
        `;

        // Append the new row to the table body
        tbody.appendChild(tr);

        // Add event listeners for buttons (optional)
        const deleteButton = tr.querySelector(".btn-delete");
        const updateButton = tr.querySelector(".btn-update");
        const viewButton = tr.querySelector(".btn-view");

        if (deleteButton) {
            deleteButton.addEventListener("click", () => {
                // Handle delete logic here
                console.log(`Delete button clicked for ${item.name}`);
                // Example: Remove the item from the array and re-render
                companies.splice(index, 1);
                renderCompany();
            });
        }

        if (updateButton) {
            updateButton.addEventListener("click", () => {
                // Handle update logic here
                console.log(`Update button clicked for ${item.name}`);
            });
        }

        if (viewButton) {
            viewButton.addEventListener("click", () => {
                // Handle view logic here
                console.log(`View button clicked for ${item.name}`);
            });
        }
    });
};
