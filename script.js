$(document).ready(function () {

    $("#addbtn").click(function () {
        let name = $("#nm").val().trim();
        let rollNo = $("#rn").val().trim();

        if (name === "" || rollNo === "") {
            alert("Please fill out both fields.");
            return;
        }

        let newRow = `
            <tr>
                <td>${name}</td>
                <td>${rollNo}</td>
                <td><button class="dbtn">Delete</button></td>
            </tr>
        `;

        $("#maintbl tbody").append(newRow);

        // Clear inputs
        $("#nm").val("");
        $("#rn").val("");
    });

    // Delete row (event delegation)
    $("#maintbl").on("click", ".dbtn", function () {
        $(this).closest("tr").remove();
    });

    // Allow only numbers in Roll No
    $("#rn").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
    });

});
    