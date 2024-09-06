document.addEventListener("DOMContentLoaded", () => {
  // 별점 기능
  const stars = document.querySelectorAll(".star");
  let rating = 0;

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      rating = star.getAttribute("data-value"); // 별점의 데이터 값 가져오기

      // 클릭한 별점까지 활성화
      stars.forEach((s) => {
        if (s.getAttribute("data-value") <= rating) {
          s.classList.add("selected");
        } else {
          s.classList.remove("selected");
        }
      });
    });
  });

  // 저장 버튼 클릭 이벤트
  const saveButton = document.getElementById("save");
  saveButton.addEventListener("click", () => {
    const reviewText = document.getElementById("review").value;
    const photoInput = document.getElementById("photo");
    const photoFile = photoInput.files[0]; // 업로드된 사진 파일 가져오기

    if (!reviewText || !rating) {
      alert("리뷰를 작성하고 별점을 선택해주세요.");
      return;
    }

    // FormData를 사용해 리뷰 텍스트, 별점, 사진 파일을 전송
    const formData = new FormData();
    formData.append("title", reviewText);
    formData.append("rating", rating);
    if (photoFile) {
      formData.append("photo", photoFile);
    }

    // AJAX 요청으로 서버에 데이터 전송
    fetch("/api/records", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Saved Review: ${data.title}, Rating: ${data.rating}`);
        alert("리뷰가 저장되었습니다!");
        // 페이지를 리로드하거나 기록 페이지로 이동할 수 있음
      })
      .catch((error) => {
        console.error("Error saving review:", error);
        alert("리뷰 저장에 실패했습니다.");
      });
  });

  // 마이페이지로 이동 버튼 클릭 이벤트
  const goToMypageButton = document.getElementById("goToMypage");
  goToMypageButton.addEventListener("click", () => {
    window.location.href = "/mypage.html"; // 마이페이지로 정확한 경로 설정
  });
});
