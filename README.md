# nodejs

Un projet initial de nodejs

## Dans le répertoire app, les répertoires suivants seront créés :

### **models**: _Les fichiers représentants les collections(tables) de la base de données_.
### **repositories**: _Les repositories interragissent avec la base de données, (ils utilisent donc les models)_.
### **services**: _Les services interragissent avec l'utilisateur, ils font appelle aux repositories_.
### **requests** :_Les requests sont les validateurs des requêtes_.
### **controllers**: _Ce sont les contrôleurs, ils utilisent les fonctions services et requests et interragissent avec l'utilisateur_.
### **routes**: _Les routes (requêtes) qui appellent les contrôleurs_.
