def caesar(text, shift, encrypted = True):

    if not isinstance(shift, int):
        return 'Shift must be an integer'

    if shift < 1 or shift > 25:
        return 'Shift must be an integer between 1 and 25'
    
    if not encrypted:
        shift = -shift

    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shiftedAlphabet = alphabet[shift:] + alphabet[:shift]
    transTable = str.maketrans(alphabet + alphabet.upper(), shiftedAlphabet + shiftedAlphabet.upper())
    encrypted_text = text.translate(transTable)
    return encrypted_text
    
def encrypt(text, shift):
    return caesar(text, shift)

def decrypt(text, shift):
    return caesar(text, shift, encrypted = False)

encryptedText = encrypt('Ce curul meu faci varutule aici?', 2)
decryptedText = decrypt(encryptedText, 2)

print('Ecrypted text is: ' + encryptedText + " | Decrypted text is: " + decryptedText)