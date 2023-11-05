import React from 'react';

function AccordionItem({ title, content, id }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse-${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{content}</div>
      </div>
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion" id="accordionExample">
        <AccordionItem
        id="1"
        title="What is BMI?"
        content="BMI, or Body Mass Index, is a numerical measure of a person's body weight in relation to their height. It is commonly used to assess whether an individual is underweight, normal weight, overweight, or obese, providing a general indication of their overall health based on their weight and height."
      />
      
      <AccordionItem
        id="2"
        title="How many meals a day should I eat?"
        content="We suggest that you eat the number of meals that you are comfortable eating and that fits into your daily schedule. Normally, we recommended 3 meals a day and a healthy snack or two. If you are an athlete it may be worth paying a bit more attention to the timing of your nutrition before and after training sessions."
      />

      <AccordionItem
        id="3"
        title="How much exercise should I do?"
        content="To lose weight you don’t necessarily have to go to the gym but we would recommend at least trying to be more active during the day and increasing the amount of walking you do. Best results tend to come from people who also undertake a basic weight training and cardiovascular exercise programme. The main point to take away here though is that you don’t need to exercise excessively to get results!"
      />

      <AccordionItem
        id="4"
        title="How does the meal planner work?"
        content="Each diet plan selected can be customised according to things such as your personal statistics, current physical condition, activity levels and whether you want to lose fat, stay in shape, or gain muscle. It can be personalised to whether you are a vegan or not, if you have any allergies such as gluten, also including the option for halal and kosher recipes only. You can even tell the planner that you prefer to only drink smoothies in the morning. Once your diet plan is set up, the meal planner automatically finds recipes to match the diet plan criteria. Have a look at the suggested recipes that are produced for you automatically and adjust until you get what is right for you."
      />
      
    </div>
  );
}

export default Accordion;
