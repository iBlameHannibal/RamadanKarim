document.addEventListener('DOMContentLoaded', function () {
    // الفارق الزمني المتبقي: 50 يومًا، 5 ساعات، 53 دقيقة
    var timeRemaining = (50 * 24 * 60 * 60 * 1000) + (5 * 60 * 60 * 1000) + (53 * 60 * 1000);

    // التاريخ الحالي
    var currentDate = new Date().getTime();

    // الوقت المتبقي حتى بداية الحدث
    var countdownDate = currentDate + timeRemaining;

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // عرض الوقت المتبقي
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;

        // عندما يصل الوقت إلى الصفر
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('days').innerHTML = '0';
            document.getElementById('hours').innerHTML = '0';
            document.getElementById('minutes').innerHTML = '0';
            document.getElementById('seconds').innerHTML = '0';

            // عرض الرسالة بعد انتهاء المؤقت
            document.querySelector('.text h1').innerHTML = 'رمضان مبارك';
            document.querySelector('.text p').innerHTML = 'اللهم أهله علينا باليمن وألإيمان والسلامة والإسلام';
        }
    }, 1000);
});
