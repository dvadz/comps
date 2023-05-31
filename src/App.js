import { GoBell } from "react-icons/go";
import { FaThumbsUp } from "react-icons/fa";

import Button from "./Button";
const App = () => {
  const handleClick = () => {
    console.log("Click at", Date.now());
  };
  return (
    <div style={{ columns: 4 }}>
      <div>
        <div>
          <Button onClick={handleClick}>
            <GoBell />
            Plain
          </Button>
        </div>
        <div>
          <Button primary>
            <FaThumbsUp />
            Primary
          </Button>
        </div>
        <div>
          <Button secondary>Secondary</Button>
        </div>
        <div>
          <Button success>Success</Button>
        </div>
        <div>
          <Button warning>Warning</Button>
        </div>
        <div>
          <Button danger>Danger </Button>
        </div>
      </div>
      <div>
        <div>
          <Button rounded>Plain Rounded</Button>
        </div>
        <div>
          <Button primary rounded>
            Primary Rounded
          </Button>
        </div>
        <div>
          <Button secondary rounded>
            Secondary Rounded
          </Button>
        </div>
        <div>
          <Button success rounded>
            Success Rounded
          </Button>
        </div>
        <div>
          <Button warning rounded>
            Warning Rounded
          </Button>
        </div>
        <div>
          <Button danger rounded>
            Danger Rounded
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button outline>Plain</Button>
        </div>
        <div>
          <Button primary outline>
            Primary Outline
          </Button>
        </div>
        <div>
          <Button secondary outline>
            Secondary Outline
          </Button>
        </div>
        <div>
          <Button success outline>
            Success Outline
          </Button>
        </div>
        <div>
          <Button warning outline>
            Warning Outline
          </Button>
        </div>
        <div>
          <Button danger outline>
            Danger Outline
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button outline rounded>
            Plain
          </Button>
        </div>
        <div>
          <Button primary rounded outline>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary rounded outline>
            Secondary
          </Button>
        </div>
        <div>
          <Button success rounded outline>
            Success
          </Button>
        </div>
        <div>
          <Button warning rounded outline>
            Warning
          </Button>
        </div>
        <div>
          <Button danger rounded outline>
            Danger
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
