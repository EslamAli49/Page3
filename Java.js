function hasabNatiga() {
    let magmo3 = 0;

    // جمع درجات الإجابات
    for (let i = 1; i <= 11; i++) {
        let igaba = document.querySelector(`input[name="s${i}"]:checked`);
        if (igaba) {
            magmo3 = magmo3 + parseInt(igaba.value);
        } else {
            alert("جاوب على كل الأسئلة الأول عشان نعرف إنت جاهز ولا لأ!");
            return;
        }
    }

    // تحديد الاستعداد
    let natiga = "";
    if (magmo3 >= 8) {
        natiga = "جاهز تمام للسفر، استمتع يا بطل!";
    } else if (magmo3 >= 4) {
        natiga = "إنت شبه جاهز، بس محتاج تجهز نفسك أكتر!";
    } else {
        natiga = "لسه محتاج تجهيزات كتير قبل ما تسافر!";
    }

    // عرض النتيجة
    document.getElementById("natiga").innerHTML = natiga;
}