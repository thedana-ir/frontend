suggestions($('input#teacher'), 'teachers/',"ممنون! از این استاد چیزی آپلود نشده بود.");

suggestions($('input#course'), 'courses/', "ایول!  درس جدید!");

suggestions($('input#university'), 'universities/', "اوو! از دانشگاه دیگه!");

$("#file").on("change", function (e) {
    var file = e.currentTarget.files[0];
        var filesize = ((file.size/1024)/1024).toFixed(4); // MB
        if (filesize >= 100) { 
            $(this).addClass('has-error');
            $(this).val('');
            $(this).parent().append("<p class='file-error'>حجم فایل باید نهایت 100 مگابایت باشه!</p>");
        }
    }
);

function ready_to_submit() {
  const form = document.querySelector("form");
  swal("آپلود شروع شد!", "لطفا منتظر بمون...", "info");
  $("#submit-container button").attr("disabled", "disabled");
  $("#submit-container button").css("filter", "grayscale(0.8)");
  form.submit();
}

$(".file-types .header-btns .pdf-btn").click(function () {
  $(".file-types .header-btns button").removeClass("active");
  $(this).addClass("active");
  $(".file-types .types").hide();
  $(".file-types .pdf-file").fadeIn();
  $(".file-types .header-btns input").val("pdf");
});

$(".file-types .header-btns .img-btn").click(function () {
  $(".file-types .header-btns button").removeClass("active");
  $(this).addClass("active");
  $(".file-types .types").hide();
  $(".file-types .img-files").fadeIn();
  $(".file-types .header-btns input").val("imgs");

});