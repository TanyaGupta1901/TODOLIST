$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
});

$('ul').on('click','span',function(event)
{
    $(this).parent().fadeOut(function()
    {
        $(this).remove();
    });
    event.stopPropagation();
})

$('input').keypress(function(event)
{
    if(event.which==13)
    {
        newt=$(this).val()
        $('ul').append('<li><span><i class="fa fa-trash"></i></span>  '+newt+'</li>');

        $(this).val('');
    }
})

$('.fa-plus').click(function(){
    $('input').toggleClass('dip');
})