def carap(text, shiftMultiplier, encrypted = True):

    if not isinstance(shiftMultiplier, int):
        return 'The shift multiplier must be an integer'

    letter_count = sum(1 for char in text if char.isalpha())
    shift = (letter_count * shiftMultiplier) % 25

    if not encrypted:
        shift = -shift

    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    shifted_alphabet = alphabet[shift:] + alphabet[:shift]
    trans_table = str.maketrans(alphabet + alphabet.upper(), shifted_alphabet + shifted_alphabet.upper())
    encrypted_text = str(shiftMultiplier) + ' | ' + text.translate(trans_table) 
    
    return encrypted_text

def encrypt(text, shiftMultiplier):
   return carap(text, shiftMultiplier)

def decrypt(text, shiftMultiplier):
    text = text[4:] #am facut asta ca sa scap de '2 |' adaugat de 2 ori
    return carap(text, shiftMultiplier, encrypted=False)

print('Enter the text you want to encrypt:')
originalText = input()
encryptedText = encrypt(originalText, 2)
decryptedText = decrypt(encryptedText, 2)

print('--\nYour original text is:')
print(originalText)
print('--Your encrypted text is:')
print(encryptedText)
print('--By decrypting it you get:')
print(decryptedText)