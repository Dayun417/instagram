document.addEventListener("DOMContentLoaded", 
    function () {
        // 기어 이모티콘 클릭하면 아이디 수정
        let configID = document.querySelector(".menu2 i");  // 기어 이모티콘
        let idText = document.querySelector("#id");  // 아이디 텍스트

        configID.addEventListener("click", 
            function () {
                let currentID = idText.textContent.trim();  // 앞뒤 공백 제거
                let newID = prompt("새로운 아이디를 입력하세요", currentID); // 기본값으로 넣기

            if (newID !== null && newID.trim() !== "") {
                idText.textContent = newID.trim();  // 저장할 때도 공백 제거
            }
        }
    );

        // 버튼 요소
        const editBtn = document.getElementById("editBtn");  // 프로필 편집 버튼
        const saveBtn = document.getElementById("saveBtn");  // 프로필 편집 저장 버튼

        // 텍스트 요소
        const nameBox = document.querySelector(".username");  // 이름
        const descBox = document.querySelector(".desc");  // 설명
        const emojiBox = document.querySelector(".emoji");  // 이모지 
        const linkBox = document.querySelector(".profile_link");  // 링크


        // 프로필 편집 버튼 클릭 시 input으로 바꾸기
        editBtn.addEventListener("click", 
            function () {
                nameBox.innerHTML = `<input type="text" class="username_input" value="${nameBox.textContent}">`;
                descBox.innerHTML = `<input type="text" class="desc_input" value="${descBox.textContent}">`;
                emojiBox.innerHTML = `<input type="text" class="emoji_input" value="${emojiBox.textContent}">`;
                linkBox.innerHTML = `<input type="text" class="link_input" value="${linkBox.textContent}">`;
                
                // 버튼 토글, 편집 후 저장
                editBtn.style.display = "none";
                saveBtn.style.display = "inline-block";
            }
        );
        
        // 저장 버튼 클릭 시 텍스트로 다시 바꾸기  
        saveBtn.addEventListener("click", 
            function () {
                const newName = document.querySelector(".username_input").value;
                const newDesc = document.querySelector(".desc_input").value;
                const newEmoji = document.querySelector(".emoji_input").value;
                const newLink = document.querySelector(".link_input").value;
                
                // input 값을 텍스트로 복구
                nameBox.innerHTML = newName;
                descBox.innerHTML = newDesc;
                emojiBox.innerHTML = newEmoji;
                linkBox.innerHTML = `<a href="${newLink}" class="profile_link">${newLink}</a>`;

                // 버튼 토글, 저장 후 편집
                editBtn.style.display = "inline-block";
                saveBtn.style.display = "none";
            }
        );

        let profile_pic = document.querySelector("#profile_pic .circle_pic");  // div 안의 이미지 선택

        // 마우스를 올렸을 때: 흑백 필터 50% 적용
        profile_pic.addEventListener("mouseover", 
            function(e) {
                e.target.style.filter = "grayscale(50%)";
            }
        );

        // 마우스를 뗐을 때: 흑백 필터 제거
        profile_pic.addEventListener("mouseleave", 
            function(e) {
                e.target.style.filter = "grayscale(0%)";
            }
        );

        // 클릭했을 때: 이미지 URL을 입력받아서 src 속성 변경
        profile_pic.addEventListener("click", 
            function(e) {
                const newURL = prompt("이미지 URL을 입력해 주세요!");
                
                // 사용자가 입력했을 때만 이미지 변경
                if (newURL) {
                    profile_pic.setAttribute("src", newURL);
                }
            }
        );
    }
);
