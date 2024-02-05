document.addEventListener("DOMContentLoaded", () => {
    let buttn = document.querySelector(".batt");
    let main = document.querySelector(".main");

    buttn.addEventListener("click", () => {
        let sea = document.querySelector("#sea");
        console.log(sea.value);

        const tag = document.createElement("div");
        tag.classList.add("task");
        tag.innerHTML = `
            <div class="item">${sea.value}</div>
            <div class="item1">Pending</div>
            <div class="close"><i class="fa fa-window-close" aria-hidden="true"></i></div>
        `;
        main.appendChild(tag);

        // Adding event listener for task completion
        let st = tag.querySelector(".item1");
        st.addEventListener("click", () => {
            if (st.textContent === "Pending") {
                st.textContent = "Completed";
            } else {
                st.textContent = "Pending";
            }
        });
        let closeIcon = tag.querySelector(".close");
        closeIcon.addEventListener("click", () => {
            main.removeChild(tag);
            updateMainContainerHeight();
        });

        // Clear the input field after adding the task
        sea.value = "";
    });
});

