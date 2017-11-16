values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
suits = ['hearts', 'diamonds', 'clubs', 'spades']
cards = []
shuffledCards = []

def deck_o_cards():
    for i in range (0, len(values)):
     for n in range (0, len(suits)):
         cardProps = suits[n], values[i]
         cards.append(cardProps)
    print(cards)
    return cards

deck_o_cards()

def shuffle(array):
    counter = len(array), temp, index

    while counter > 0:
        index = Math.floor(Math.random() * counter)
        counter -= 1
        temp = array[counter]
        array[counter] = array[index]
        array[index] = temp

    return array
