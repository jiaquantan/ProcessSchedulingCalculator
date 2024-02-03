// A React component that creates a ripple effect when clicked.
const Button = ({ children }) => { // Button component accepts children as a prop. children is a special prop in React that is used to pass elements as children to other components.
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => { // createRipple function is responsible for creating the ripple effect when the button is clicked.
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.pageX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.pageY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <button onClick={createRipple} type="submit">
      {children}
    </button>
  );
};

export default Button;