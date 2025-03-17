# x = int(input("Digite um número: "))
# print(f"Números pares de 0 até {x}:")
# for i in range(0, x + 1):
#     if i % 2 == 0:
#         print(i)
       
x = [1,2,44,522,25,63,11,2311,244]
pares = []
for i in x:
  if i%2==0:
    pares.append(i)
    

soma=(sum(pares))
media=(soma/len(pares))
print(f'a médias dos números pares é {media}')