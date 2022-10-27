const prefecture_name = [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
];


$(function () {

    let timer;
    let random;
    // START・STOPボタンクリックのイベント
    $("#button").on("click", function () {
        // START
        if ($(this).text() == "START") {
            // ボタンのテキストを"STOP"に変更
            $(this).text("STOP");

            timer = setInterval(function () {
                random = Math.floor(Math.random() * prefecture_name.length);
                $("#result").text(prefecture_name[random]);
            }, 10);
            // STOP
        } else {
            // ボタンのテキストを"START"に変更
            $(this).text("START");

            // ルーレットタイマーを停止
            clearInterval(timer);

            // 停止時の数字を結果に反映
            var result = prefecture_name[random];
            // 一覧から削除（次のルーレットに表示させないため）
            prefecture_name.splice(random, 1);

            // 数字一覧に追加
            // if ($("li") === "") {
            //     $("#number").append($("<li>").text(result));
            //     $("#number li").addClass("centering");
            //     } else {
            //         $("centering").replaceWith(result);
            // }

            $("#number").append($("<li>").text("さっそく準備へ"));
            $("#number li").addClass("centering");

        }
    });
});

$("#result,#number").on("click", function () {
    location.href = 'https://www.trivago.jp/';
});



