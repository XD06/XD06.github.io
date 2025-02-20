document.addEventListener('DOMContentLoaded',  function() {
  // 获取所有具有.click-to-zoom类的图片 
  document.querySelectorAll('.click-to-zoom').forEach(img  => {
    img.addEventListener('click',  function(e) {
      e.preventDefault();  // 防止默认链接行为 
      const overlay = document.querySelector('.image-overlay'); 
      const enlargedImg = document.querySelector('.enlarged-image'); 
      
      // 设置放大后的图片源 
      enlargedImg.src  = this.src; 
      
      // 显示覆盖层 
      overlay.style.display  = 'flex';
    });
  });
 
  // 关闭覆盖层 
  document.querySelector('.close-overlay').addEventListener('click',  function() {
    document.querySelector('.image-overlay').style.display  = 'none';
  });
 
  // 使用ESC键关闭 
  document.addEventListener('keydown',  function(e) {
    if (e.key  === 'Escape') {
      document.querySelector('.image-overlay').style.display  = 'none';
    }
  });
 
  // 点击覆盖层外区域关闭 
  document.querySelector('.image-overlay').addEventListener('click',  function(e) {
    if (e.target  === this) {
      this.style.display  = 'none';
    }
  });
});