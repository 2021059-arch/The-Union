document.addEventListener("DOMContentLoaded", function() {
    // KGB Beria Propaganda Ads
    const kgbAds = [
        "[KGB 직통 신고 안내] 이웃의 생각에서 불순물이 느껴집니까? 즉시 베리야 동지에게 연락하세요. (회선: 00-BLOOD)",
        "[KGB 공익 공고] 당은 당신의 마술적 재능을 원합니다. 벽을 투시할 수 있다면 제9초능력사단으로 자진 입대하십시오.",
        "[국가보위부] 위치크래프트 13국은 궤도 위성망을 통해 당신의 오늘 밤 꿈을 감시합니다. 평온한 수면 되십시오.",
        "[베리야 동지의 훈시] 숨길 수 있는 비밀은 오직 태어나지 않은 자의 머릿속에만 존재한다. 신고는 의무입니다.",
        "[연방 식량 배급처] 금일 배급된 영양 블록에서 기하학적 문양이 꿈틀거린다면 즉시 소각하고 기도하십시오."
    ];

    const bannerText = document.querySelector('.kgb-banner-text');
    if(bannerText) {
        let currentIndex = 0;
        bannerText.textContent = kgbAds[0];
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % kgbAds.length;
            
            // Glitch effect during transition
            bannerText.style.opacity = 0;
            setTimeout(() => {
                bannerText.textContent = kgbAds[currentIndex];
                bannerText.style.opacity = 1;
            }, 100);
        }, 6000); // Change every 6 seconds
    }
});
