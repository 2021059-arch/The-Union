document.addEventListener("DOMContentLoaded", function() {
    // KGB & Soviet Bureaucracy Black Comedy Ads
    const kgbAds = [
        "[KGB 긴급 공익광고] 이웃집 할머니가 이상하다면 지체 없이 베리야 동지에게 연락하세요! (직통 핫라인: 00-BERIA-KGB)",
        "[위치크래프트 13국 알림] 숟가락을 노려보았을 때 숟가락 대신 벽시계가 울부짖는다면 즉시 지원 서류를 제출하십시오.",
        "[당 중앙 인사위원회 공고] 베리야 동지의 제47차 정기 휴가 청구서는 '조국 건설에 쉴 틈은 없다'는 사유로 만장일치 반려되었습니다.",
        "[항공우주군 선전] 우리 연방의 로켓 엔진은 너무나 완벽하여, 중력조차 당의 방침에 굴복하여 물러났습니다.",
        "[연방 식량배급총국] 금일 배급된 통조림에서 짐승의 울음소리가 난다면 그것은 프레오브라젠스키 인간화 공정의 사소한 부산물이니 안심하고 섭취하십시오.",
        "[KGB 직통 신고센터] '휴식을 취하고 싶다'는 생각은 부르주아적 나태입니다. 당신의 뇌파가 느려지면 베리야 동지가 찾아갑니다."
    ];

    const bannerText = document.querySelector('.kgb-banner-text');
    if(bannerText) {
        let currentIndex = 0;
        bannerText.textContent = kgbAds[0];
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % kgbAds.length;
            
            bannerText.style.opacity = 0;
            setTimeout(() => {
                bannerText.textContent = kgbAds[currentIndex];
                bannerText.style.opacity = 1;
            }, 150);
        }, 5000);
    }
});
