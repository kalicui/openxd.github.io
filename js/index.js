// 获取需要操作的元素
const heroTitle = document.querySelector('.hero h1');
const heroSubtitle = document.querySelector('.hero p');

// 添加动画效果
heroTitle.style.opacity = '0';
heroTitle.style.transform = 'translateY(-20px)';
heroSubtitle.style.opacity = '0';
heroSubtitle.style.transform = 'translateY(20px)';

// 在页面加载完成后执行动画
window.addEventListener('load', () => {
    heroTitle.style.transition = 'opacity 1s ease, transform 1s ease';
    heroTitle.style.opacity = '1';
    heroTitle.style.transform = 'translateY(0)';
    
    heroSubtitle.style.transition = 'opacity 1s ease, transform 1s ease';
    heroSubtitle.style.opacity = '1';
    heroSubtitle.style.transform = 'translateY(0)';
});

// 在页面加载完成后执行以下代码
window.onload = function() {
    // 获取所有导航栏链接
    const navLinks = document.querySelectorAll('nav a');
  
    // 为每个链接添加点击事件
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认的链接行为
  
        const targetId = this.getAttribute('href'); // 获取目标区域的ID
        const targetElement = document.querySelector(targetId); // 获取目标区域的元素
  
        if (targetElement) {
          // 使用平滑滚动来滚动到目标区域
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

    // 监听滚动事件
    let prevScrollPos = window.pageYOffset;
    document.querySelector("nav").classList.remove("hidden");
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
        // 向上滑动或页面顶部，显示导航栏
        document.querySelector("nav").classList.remove("hidden");
      } else {
        // 向下滑动，隐藏导航栏
        document.querySelector("nav").classList.add("hidden");
      }
      prevScrollPos = currentScrollPos;
    }
    
    const copyLink = document.getElementById("copyLink");

    copyLink.addEventListener("click", function() {
      const text = this.getAttribute("data-copy-text");

      // 创建临时文本区域元素
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = text;
      document.body.appendChild(tempTextArea);

      // 选择文本并执行复制操作
      tempTextArea.select();
      document.execCommand("copy");

      // 移除临时文本区域元素
      document.body.removeChild(tempTextArea);

      // 更新链接文本
      copyLink.textContent = "已复制";
      setTimeout(function() {
        copyLink.textContent = "javasq56x@163.com";
      }, 1500); // 在1.5秒后将链接文本恢复为原始文本
    });