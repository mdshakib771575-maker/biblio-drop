"use client";
import Logo from "@/components/Logo";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    await authClient.signUp.email({
      ...user,
      plan: 'free',
    });

    redirect('/')
  };

  return (
    <div className="flex items-center justify-center rounded-3xl bg-surface p-6 max-w-md mx-auto border mt-5">
      <Surface className="w-full">
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <div className="mx-auto">
            <Logo></Logo>

            </div>
            <Description className="text-xl mx-auto" >Create your account</Description>
            <Fieldset.Group>
              <TextField isRequired name="name">
                <Label>Name</Label>
                <Input placeholder="John Doe" variant="secondary" />
                <FieldError />
              </TextField>

              <TextField name="image" type="url">
                <Label>Image URL</Label>
                <Input placeholder="Image URL" variant="secondary" />
                <FieldError />
              </TextField>
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="john@example.com" variant="secondary" />
                <FieldError />
              </TextField>

              <TextField isRequired name="password" type="password">
                <Label>Password</Label>
                <Input placeholder="Password" variant="secondary" />
                <FieldError />
              </TextField>

              <Select isRequired name="role" placeholder="Select one">
                <Label>Signup As</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="user" textValue="buyer">
                      User
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="librarian" textValue="seller">
                       Librarian
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </Fieldset.Group>

            <Button type="submit" className={"w-full bg-gradient-to-r from-pink-500 to-purple-500"}>
              Signup
            </Button>
          </Fieldset>
        </Form>
      </Surface>
    </div>
  );
}
