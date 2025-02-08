# IGPTB: IntelliRoute GPT Bot

## Overview

**IGPTB (IntelliRoute GPT Bot)** is a smart query routing system that categorizes user inputs to generate more relevant responses efficiently. The system allows dynamic category selection and features a web search option for broader information retrieval.

## Features

- **Smart Query Routing**: Intelligently categorizes user queries for better responses.
- **Enhanced Response Efficiency**: Limits search scope based on selected categories for faster results.
- **Dynamic UI Interaction**: Allows users to select multiple categories with real-time UI updates.
- **Web Search & Custom Queries**: Enables an additional "Web Search" option for expanded information access.

## Folder Structure

```
/project-root
│── index.html         # Main HTML structure
│── /styles
│   ├── styles.css     # CSS file for styling
│── /scripts
│   ├── script.js      # JavaScript file for functionality
│── /images
│   ├── IGPTB.jpg      # Logo image
```

## Workflow Breakdown

### Step 1: Category Selection (User Interaction Layer)
- Users select categories from predefined options (e.g., General Knowledge, Science & Technology, Business & Finance, Web Search, Others).
- UI dynamically updates selected categories with real-time feedback.
- Selected categories are highlighted in yellow.

### Step 2: Query Processing (Input Recognition Layer)
- Users enter a query in the input field.
- The system determines the selected categories.
- If no category is selected, users are prompted to choose one.
- Queries with multiple categories are routed accordingly.

### Step 3: Response Handling (Output Generation Layer)
- Structured responses are generated based on the selected category.
- "Web Search" simulates external search behavior.
- "Others" category introduces a delay for deeper processing.

## Algorithm (High-Level Pseudocode)

```plaintext
FUNCTION toggleCategory(category):
    IF category is selected:
        Remove category from the list
        Update UI to remove highlight
    ELSE:
        Add category to the list
        Highlight selected category
    Update displayed "Selected Categories"

FUNCTION processUserQuery():
    Retrieve user input
    Determine selected categories
    IF no category is selected:
        Prompt user to select one
    ELSE:
        Route query to the relevant processing logic
        Display generated response
```

## Future Enhancements

### AI-Powered Categorization
- Implement **Natural Language Processing (NLP)** to automatically detect the most relevant category.
- Use machine learning to suggest categories based on past queries.

### Personalized Query Optimization
- Introduce a **query history feature** to remember frequently selected categories.
- Provide **smart recommendations** based on user interactions.

### API & External Data Integration
- Implement **real-time search APIs** for Web Search queries.
- Integrate with **Wikipedia, Google Search API, and other sources** for comprehensive responses.

### Multi-Category Query Processing
- Enable **multi-category response generation** for hybrid queries.
- Example: "Latest AI trends in Business" → Process under **Technology & Business**.

## Summary
- **IGPTB** intelligently routes queries based on selected categories.
- A **dynamic UI** provides real-time category selection updates.
- **Fast and relevant responses** are generated using category-based routing.
- Future upgrades include **AI categorization, NLP, and API integrations** for improved functionality.

