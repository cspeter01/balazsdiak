$(document).ready(function () {
    const fruits = ['apple', 'banana', 'cherry', 'lemon', 'melon', 'orange', 'peach', 'pineapple', 'plum', 'strawberry'];
    var friutsIndex = [];
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * fruits.length);
        if (friutsIndex.indexOf(index) == -1) {
            friutsIndex.push(index);
        } else {
            i--;
        }
    }
    for (let i = 0; i < friutsIndex.length; i++) {
        $('#pool-' + (i + 1)).append('<img src="images/' + fruits[friutsIndex[i]] + '_group.png" alt="">');
    }
    $('img').on('click', function () {
        if ($(this).hasClass('disable') == false) {
            $(this).toggleClass("selected");
            if ($('.selected').length > 1) {
                if ($('.selected').eq(0).parent().hasClass('pool-item') && $('.selected').eq(1).parent().hasClass('pool-item')) {
                    var changeFrom = $('.selected').first();
                    var changeTo = $('.selected').last();
                    $('.selected').first().wrap(changeTo);
                    $('.selected').last().wrap(changeFrom);

                    $('.selected').each(function () {
                        $(this).empty();
                        $(this).removeClass('selected');
                    })
                } else {
                    $('.selected').each(function () {
                        $(this).empty();
                        $(this).removeClass('selected');
                    })
                }
            }
        }
    });
    $('.collector').click(function () {
        if ($('.selected').length == 1 && $(this).children().length < 2) {
            let src = document.getElementsByClassName('selected')[0].getAttribute('src');
            src = src.split("_")[0];
            $(this).append('<img src="' + src + '_1.png" class="collector-item" alt="">');
            $('.selected').eq(0).addClass('disable');
            $('.collector .disable').each(function () {
                $(this).remove();
            })
            $('.selected').eq(0).removeClass('selected');
        }
        if ($('#collector-1').children().length == 2 && $('#collector-2').children().length == 2 && $('#collector-3').children().length == 2) {
            $('.success').css('display', 'flex');
            gameEnd = true;
        }
    });
});
$(document).on('click', '.collector-item', function () {
    if ($(this).hasClass('disable') == false) {
        $(this).toggleClass("selected");
        if ($('.selected').length > 1) {
            if ($('.selected').eq(0).parent().hasClass('collector-item') && $('.selected').eq(1).parent().hasClass('collector-item')) {
                var changeFrom = $('.selected').first();
                var changeTo = $('.selected').last();
                $('.selected').first().wrap(changeTo);
                $('.selected').last().wrap(changeFrom);
                $('.selected').each(function () {
                    $(this).empty();
                    $(this).removeClass('selected');
                })
            } else {
                $('.selected').each(function () {
                    $(this).empty();
                    $(this).removeClass('selected');
                })
            }
        }
    }
});