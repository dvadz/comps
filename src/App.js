import Button from "./Button";

const App = () => {
  return (
    <div style={{ columns: 4 }}>
      <div>
        <Button>Plain</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button success>Success</Button>
        <Button warning>Warning</Button>
        <Button danger>Danger </Button>
      </div>
      <div>
        <Button rounded>Plain</Button>
        <Button primary rounded>
          Primary
        </Button>
        <Button secondary rounded>
          Secondary
        </Button>
        <Button success rounded>
          Success
        </Button>
        <Button warning rounded>
          Warning
        </Button>
        <Button danger rounded>
          Danger
        </Button>
      </div>
      <div>
        <Button outline>Plain</Button>
        <Button primary outline>
          Primary
        </Button>
        <Button secondary outline>
          Secondary
        </Button>
        <Button success outline>
          Success
        </Button>
        <Button warning outline>
          Warning
        </Button>
        <Button danger outline>
          Danger
        </Button>
      </div>
      <div>
        <Button outline rounded>
          Plain
        </Button>
        <Button primary rounded outline>
          Primary
        </Button>
        <Button secondary rounded outline>
          Secondary
        </Button>
        <Button success rounded outline>
          Success
        </Button>
        <Button warning rounded outline>
          Warning
        </Button>
        <Button danger rounded outline>
          Danger
        </Button>
      </div>
    </div>
  );
};

export default App;
