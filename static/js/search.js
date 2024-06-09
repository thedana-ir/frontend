$(".filters button").click(function() {
    let key = $(this).attr("title");
    let input_id = $(this).attr("input-id");
    let value = $(this).text();
    const defaults = ['استاد', 'دانشگاه', 'نوع منبع', 'درس'];

    
    if (defaults.includes(value)) {
        value = '';
    }

    if (input_id == 'kind') {
        swal({
            title: `نوع منبع رو انتخاب کن: `,
            icon: "info",
            buttons: {
                cancel: "بیخیال!",
                confirm: {
                    value: "filter",
                    text: "تایید",
                    className: "bg-green"
                },
            },
            content: $("#checkboxes-container > div")[0]
            
        }).then((value) => {
            if (value == "filter") {
                let query = '';
                
                let s = $("input[name='s']").val();
                if (s) {
                    query += "s=" + s;
                }

                let teacher = $("input[name='teacher']").val();
                if (teacher) {
                    query += "&teacher=" + teacher;
                }

                let course = $("input[name='course']").val();
                if (course) {
                    query += "&course=" + course;
                }

                let university = $("input[name='university']").val();
                if (university) {
                    query += "&university=" + university;
                }
                console.log(query);
                // window.location.href = window.location.protocol + "//" + window.location.host + "/hub/sources/?" + query;
            }
          });
        
    } else {
        swal({
            title: `نام ${key} رو سرچ کن:`,
            icon: "info",
            buttons: {
                cancel: "بیخیال!",
                confirm: {
                    value: "filter",
                    text: "تایید",
                    className: "bg-green"
                },
            },
            content: {
                element: "input",
                attributes: {
                    id: input_id,
                    placeholder: `نام ${key}`,
                    type: "text",
                    value: value,
                    name: input_id,
                },
            },
        }).then((value) => {
            if (value != "" && value != null) {
                value = $(`input#${input_id}`).val();

                query_obj = new URLSearchParams(window.location.search);
                query_obj.set(input_id, value);
                window.location.href = window.location.protocol + "//" + window.location.host + "/hub/sources/?" + query_obj.toString();
            }
          });
        $(".swal-content").append(`
            <ul class="suggestions"></ul>
        `);
        suggestions($(`input#${input_id}`), `${input_id}/`, " متاسفانه هنوز چیزی آپلود نشده!");
    }
});