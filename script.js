function initComparisons() {
  var beforeImage = document.querySelector(".comparison-before");
  var afterImage = document.querySelector(".comparison-after");
  var comparisonTitle = document.getElementById("comparison-title");
  var previousButton = document.getElementById("previous-comparison");
  var nextButton = document.getElementById("next-comparison");
  var counter = document.getElementById("comparison-counter");
  var comparisons = [
    {
      before: "img/antessofa1.png",
      after: "img/depoissofa1.png",
      title: "Higienizacao de sofa",
      beforeAlt: "Sofa antes da limpeza",
      afterAlt: "Sofa depois da limpeza"
    },
    {
      before: "img/antescolchao1.png",
      after: "img/depoiscolchao1.png",
      title: "Higienizacao de colchao",
      beforeAlt: "Colchao antes da limpeza",
      afterAlt: "Colchao depois da limpeza"
    },
    {
      before: "img/carroantes1.png",
      after: "img/carrodepois1.png",
      title: "Higienizacao de banco de carro",
      beforeAlt: "Banco do carro antes da limpeza",
      afterAlt: "Banco do carro depois da limpeza"
    }
  ];
  var currentComparison = 0;

  function renderComparison() {
    var comparison = comparisons[currentComparison];
    beforeImage.src = comparison.before;
    afterImage.src = comparison.after;
    comparisonTitle.textContent = comparison.title;
    beforeImage.alt = comparison.beforeAlt;
    afterImage.alt = comparison.afterAlt;
    counter.textContent = (currentComparison + 1) + " / " + comparisons.length;
  }

  function changeComparison(step) {
    currentComparison = (currentComparison + step + comparisons.length) % comparisons.length;
    renderComparison();
  }

  previousButton.addEventListener("click", function () {
    changeComparison(-1);
  });

  nextButton.addEventListener("click", function () {
    changeComparison(1);
  });

  renderComparison();
}