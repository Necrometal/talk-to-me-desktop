import { SyntheticEvent, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Button, Card, Form } from 'react-bootstrap';
import Link from 'next/link'
import Style from '~src/assets/styles/Login.module.css';
import { useRouter } from "next/router";

function App() {
  const router = useRouter()

  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("Test");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  const submitLogin = (e: SyntheticEvent) => {
    e.stopPropagation()
    e.preventDefault()

    router.push("/home")
  }

  return (
    <div className={Style.container}>
      <Card className={Style.cardLoginContainer}>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center">
            <span className={Style.welcome}>
              Welcome to Talk to me
            </span>
            <h3>Log into your account</h3>
          </div>

          <div className="my-5 w-75">
            <form onSubmit={submitLogin}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  className={Style.input}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  className={Style.input}
                />
              </Form.Group>

              <div className={Style.submitContainer}>
                <Button 
                  variant="outline-primary"
                  type="submit"
                  className={Style.submit}
                >
                  Log in
                </Button>
              </div>
            </form>
          </div>

          <div className={Style.otherOptionContainer}>
            <Link 
              href="#"
            >
              <a className={Style.otherOption}>You don't have an account ?</a>
            </Link>
            <Link 
              href="#"
            >
              <a className={Style.otherOption}>Forgot password</a>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
