// js/deck.js 
class TarotDeck {
    constructor() {
        this.cards = [];
        this.currentDeck = [];
        this.drawnCards = [];
}

// tải dữ liệu từ cards.json
async loadCards() { // tải dữ liệu bất đồng bộ sử dụng async để không bị đơ thao tác khi nạp liệu
        try {
            const response = await fetch('js/data/cards.json'); // dùng 
            if (!response.ok) {
                throw new Error(`Không tìm thấy tệp cards.json: ${response.status} ${response.statusText}`);
            }
            
            this.cards = await response.json();
            this.resetDeck();
            console.log(`Đã nạp thành công ${this.cards.length} lá bài từ cards.json`);
        } catch (error) {
            console.error('Lỗi tải bài:', error);
        }
    }

// gom bài lại từ đầu
    resetDeck() {
        this.currentDeck = [...this.cards];
        this.drawnCards = [];
    }

}