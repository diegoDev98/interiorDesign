new fullpage('#fullpage', {
    autoScrolling: true,
    anchors: ['page1', 'page2', 'page3'],
});

$(document).on('click', '#toTop', function(){
    fullpage_api.moveTo('page1');
  });