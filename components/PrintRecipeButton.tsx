'use client';

import { Recipe } from '../lib/types';

interface PrintRecipeButtonProps {
  recipe: Recipe;
}

export default function PrintRecipeButton({ recipe }: PrintRecipeButtonProps) {
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${recipe.title} - Salt Lake Gourmet</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px; }
            h2 { color: #059669; margin-top: 30px; }
            .recipe-info { display: flex; gap: 20px; margin: 20px 0; }
            .info-item { text-align: center; padding: 10px; background: #f3f4f6; border-radius: 8px; }
            .ingredients, .instructions { margin: 20px 0; }
            .ingredient { margin: 5px 0; }
            .instruction { margin: 15px 0; padding-left: 30px; position: relative; }
            .step-number { position: absolute; left: 0; top: 0; background: #059669; color: white; width: 20px; height: 20px; border-radius: 50%; text-align: center; font-size: 12px; line-height: 20px; }
            .tags { margin: 20px 0; }
            .tag { display: inline-block; background: #dcfce7; color: #166534; padding: 4px 8px; margin: 2px; border-radius: 12px; font-size: 12px; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          <h1>${recipe.title}</h1>
          <p>${recipe.description}</p>
          
          <div class="recipe-info">
            <div class="info-item">
              <strong>Prep Time</strong><br>
              ${recipe.prepTime} min
            </div>
            <div class="info-item">
              <strong>Cook Time</strong><br>
              ${recipe.cookTime} min
            </div>
            <div class="info-item">
              <strong>Servings</strong><br>
              ${recipe.servings}
            </div>
            ${recipe.calories ? `
            <div class="info-item">
              <strong>Calories</strong><br>
              ${recipe.calories}
            </div>
            ` : ''}
          </div>
          <h2>Ingredients</h2>
          <div class="ingredients">
            ${recipe.ingredients.map(ing => 
              `<div class="ingredient">• ${ing.amount} ${ing.unit} ${ing.name}</div>`
            ).join('')}
          </div>

          <h2>Instructions</h2>
          <div class="instructions">
            ${recipe.instructions.map(inst => 
              `<div class="instruction">
                <span class="step-number">${inst.step}</span>
                ${inst.text}
              </div>`
            ).join('')}
          </div>

          <div class="tags">
            ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>

          <hr style="margin: 30px 0;">
          <p style="text-align: center; color: #666; font-size: 14px;">
            Recipe from Salt Lake Gourmet - saltlakegourmet.com
          </p>
        </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
      Print Recipe
    </button>
  );
}
