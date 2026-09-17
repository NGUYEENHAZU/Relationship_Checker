// js/deck.js 
class TarotDeck {
    constructor() {
        this.deckCards = [];
        this.currentDeck = [];
        this.drawnCards = [];
}

// tải dữ liệu từ cards.json
async loadCards() { // tải dữ liệu bất đồng bộ sử dụng async để không bị đơ thao tác khi nạp liệu
        try {
            const response = await fetch('js/data/cards.json'); // dùng await để chờ phản hồi từ fetch, fetch trả về một Promise kết quả từ card json cho biến response
            if (!response.ok) {
                throw new Error(`Không tìm thấy tệp cards.json: ${response.status} ${response.statusText}`);
            }
            this.deckCards = await response.json();
            this.resetDeck();
            console.log(`Đã nạp thành công ${this.deckCards.length} lá bài từ cards.json`);
        } catch (error) {
            console.error('Lỗi tải bài:', error);
        }
    }

// gom bài lại từ đầu
resetDeck() {
        this.currentDeck = [];              // trả currentDeck thành 1 deck rỗng
        for (let card of this.deckCards) {  // duyệt từng lá từ bồ bộ bài gốc vào 
            this.currentDeck.push(card);    // nhét từng lá vào
        }
        //this.currentDeck = [...this.deckCards];   // "..." là cú pháp spread operator, ý nghĩa trãi bài từ bộ gốc ra hết sau đó sao chép sang currentDeck để có bộ bài có thể xáo mà không cần reload lại nguyên bộ bài | nói cách khác nó thay thế cho vòng for
        this.drawnCards = [];
    }
// xáo bài
shuffle() {
    for (let i = this.currentDeck.length - 1; i > 0;i--) {
        const j = Math.floor(Math.random() * (i+1));
        [this.currentDeck[i], this.currentDeck[j]] = [this.currentDeck[j], this.currentDeck[i]];
    }
    console.log('Đã xáo bài!');
}

draw() {
    //Nếu rút hết bài thì báo hết bài
    if (this.currentDeck.length === 0) {
        console.warn('Hết bài để rút!');
        return null;
    }

    // lấy lá trên cùng của bộ bài đã xáo
    const card = this.currentDeck.pop();
    
    // lấy ngẫu nhiên chiều lá bài đã rút xác xuất 50/50
    const isReversed = Math.random() < 0.5;

    // tạo đối tượng lá bài đã rút với thông tin chi tiết
    const drawnCard = {
        cardData: card, // thông tin lá bài từ cards.json
        isReversed: isReversed, // xác định chiều lá bài
        orientationText: isReversed ? 'Ngược (Reversed)' : 'Xuôi (Upright)', // hiển thị chiều lá bài
        details: isReversed ? card.reversed : card.upright // hiển thị chi tiết nghĩa lá bài dựa trên chiều rút (từ cards.json)
    };

    // lưu lá bài đã rút vào mảng drawnCards để có thể hiển thị lại sau này
    this.drawnCards.push(drawnCard);
    return drawnCard; 
}


}