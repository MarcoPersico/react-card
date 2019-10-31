isSaluteSent = False

def sayHello(name):
    isSaluteSent = True
    return ('Hola ' + name)

if isSaluteSent == False:
    sayHello('Meli')
else:
    print('ya te salude')