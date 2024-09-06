document.addEventListener('DOMContentLoaded', () => {
    const editPhotoBtn = document.getElementById('edit-photo');
    const deletePhotoBtn = document.getElementById('delete-photo');
    const saveInfoBtn = document.getElementById('save-info');

    editPhotoBtn.addEventListener('click', () => {
        // 프로필 사진 변경 로직 추가
        alert('사진 수정 기능 실행');
    });

    deletePhotoBtn.addEventListener('click', () => {
        // 프로필 사진 삭제 로직 추가
        document.getElementById('profile-photo').src = '/images/default-profile.png';
    });

    saveInfoBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        alert(`Name: ${name}, Password: ${password}`);
    });
});
