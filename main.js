// 포트폴리오 데이터
const portfolioItems = [
    {
        title: "스타트업 웹사이트",
        category: "website",
        image: "images/portfolio1.jpg",
        description: "AI 기반 맞춤형 웹사이트 제작"
    },
    {
        title: "인터랙티브 데모",
        category: "demo",
        image: "images/portfolio2.jpg",
        description: "사용자 경험 중심의 프로토타입"
    },
    {
        title: "반응형 웹앱",
        category: "website",
        image: "images/portfolio3.jpg",
        description: "모바일 최적화 웹 애플리케이션"
    }
];

// 포트폴리오 그리드 생성
function createPortfolioGrid() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (!portfolioGrid) return;
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', item.category);
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// 포트폴리오 필터링
function setupPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 활성 버튼 스타일 변경
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            const items = document.querySelectorAll('.portfolio-item');

            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// 스크롤 시 헤더 스타일 변경
function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = 'var(--white)';
    }
}

// 문의 폼 제출 처리
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // 여기에 실제 폼 제출 로직을 구현할 수 있습니다
    alert('문의가 성공적으로 제출되었습니다. 곧 연락드리겠습니다.');
    form.reset();
}

// 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    createPortfolioGrid();
    setupPortfolioFilter();
    window.addEventListener('scroll', handleScroll);
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

// 스무스 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 