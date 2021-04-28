import { Notyf } from "notyf";

class Notify {
  private notification = new Notyf({
    duration: 5000,
    position: { x: "center", y: "top" },
    ripple: true,
  });

  public success(message: string) {
    this.notification.success(message);
  }

  public error(err: any) {
    const message = this.extractMessage(err);
    this.notification.error(message);
  }

  private extractMessage(err: any): string {
    if (typeof err === "string") {
      return err;
    }

    if (typeof err?.response?.data === "string") {
      return err.response.data;
    }

    if (Array.isArray(err?.response?.data)) {
      return err.response.data[0];
    }

    // Must be last- to show the messages from server first
    if (typeof err?.message === "string") {
      return err.message;
    }
    return "Error! please try again.";
  }
}

const notify = new Notify();
export default notify;
