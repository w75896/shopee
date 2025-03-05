# a.介紹你的設計理念，如何契合目標網站的內容或是風格?
### **遊戲化體驗**
契合蝦皮平台的遊戲風格

蝦皮內部本就有個蔬果農場的遊戲，找出類似風格製作出一個 以 **卡通風格** 為主的點擊遊戲。

 **社群連結**
提供  **替代入口（如 Facebook 、 LINE 、INSTAGRAM 連結 ）**，讓用戶在等待時仍能參與社群活動。

# b.介紹該網頁使用到那些 HTML , CSS, JavaScript，請用圖文並茂的方式

### **HTML 部分**

1. **基本結構**：
    - `<!DOCTYPE html>`：聲明文檔類型為 HTML5。
    - `<html lang="zh-TW">`：定義文檔的語言為繁體中文。
    - `<head>`：包含網頁的元數據，如字符集、視口設置、標題和樣式表。
    - `<body>`：包含網頁的主要內容。

2. **元數據**：
    - `<meta charset="UTF-8">`：設置字符編碼為 UTF-8。
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`：確保網頁在移動設備上正確縮放。
    - `<title>`：設置網頁標題。

3. **內容結構**：
    - `<div class="container">`：用於包裹主要內容。
    - `<div class="shopee-header">`：包含頂部導航欄。
    - `<div class="top">`：包含頂部內容。
    - `<div id="bar-top">` 和 `<div id="bar-bottom">`：分別包含頂部和底部的導航欄。
    - `<ul class="select">` 和 `<ul class="select1">`：包含導航鏈接。
    - `<div class="search-container">`：包含搜索框。
    - `<div class="under">`：包含遊戲區域。

4. **動態元素**：
    - `<div id="game-area">`：遊戲區域。
    - `<div id="ac">`：顯示提示信息。
    - `<img id="board">` 和 `<img id="hangboard">`：顯示圖片。
  ![image](https://github.com/user-attachments/assets/dc2b0711-fdee-440d-8378-0f9a0bccbbcc)
![image](https://github.com/user-attachments/assets/98c14db0-5877-4599-b29e-b2316b3a4f91)

### **CSS 部分**

1. **全局樣式**：
    - `body`：設置網頁的寬度和外邊距。
    - `.container`：設置容器的寬度和高度。
    - `.top`：設置頂部區域的樣式。
    - `#bar-top` 和 `#bar-bottom`：設置頂部和底部導航欄的樣式。
    - `.select` 和 `.select1`：設置導航鏈接的樣式。
    - `.shopee-header`：設置頂部導航欄的樣式。
    - `.shopee_logo`：設置蝦皮標誌的樣式。
    - `.link`：設置鏈接的樣式。
    - `ul` 和 `li`：設置列表的樣式。
    - `.spliter` 和 `.help`：設置分隔符和幫助中心的樣式。
    - `.search-container`：設置搜索框的樣式。
    - `.search-input` 和 `.search-button`：設置搜索框和按鈕的樣式。
    - `.game-container`：設置遊戲容器的樣式。
    - `.under`：設置遊戲區域的樣式。
    - `.game`：設置遊戲區域內部元素的樣式。
    - `#ac`：設置提示信息的樣式。
    - `#img1`：設置背景圖片的樣式。
    - `#game-area`：設置遊戲區域的樣式。
    - `.orange`：設置橘子的樣式。
    - `#board` 和 `#hangboard`：設置圖片的樣式。
    - `#sc`：設置分數顯示的樣式。
    - `h1`：設置標題的樣式。

2. **響應式設計**：
    - 使用媒體查詢（`@media`）來適應不同設備的屏幕尺寸，包括移動設備、平板電腦、小型桌面和大型桌面。

### **JavaScript 部分**

1. **互動功能**：
    - `document.querySelector('.search-input').addEventListener('keypress', function (e) { ... })`：監聽搜索框的鍵盤事件，當按下 Enter 鍵時觸發搜索按鈕的點擊事件。
    - `document.querySelector('.search-button').addEventListener('click', function () { ... })`：監聽搜索按鈕的點擊事件，執行搜索操作。

2. **遊戲功能**：
    - `function createOrange() { ... }`：隨機生成橘子並設置其掉落和點擊事件。
    - `function updateScore(points) { ... }`：更新分數顯示。
    - `setInterval(createOrange, 1200);`：每隔一段時間生成一個橘子。

![image](https://github.com/user-attachments/assets/ff8bdf8f-e4e3-4ee1-9301-3a93af334541)

# c. 需要包含 commit 次數的截圖 20+1
![image](https://github.com/user-attachments/assets/a7173c48-8d6a-4031-8dc5-84d27e2ecfa4)



