
      let idade = prompt("Digite sua idade:")
      if (idade >= 0 && idade < 15) {
          document.write("Você é uma Criança")
      } else if (idade >= 15 && idade <30) {
          document.write("Você é um Jovem")
      } else if (idade >= 30 && idade <60) {
        document.write("Você é um Adulto")
      } else if (idade >60)
        document.write("Você é um Idoso")