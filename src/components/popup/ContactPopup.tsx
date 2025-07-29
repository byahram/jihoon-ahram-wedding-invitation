import { Button } from "../common/Buttons";
import { PopupContainer } from "./PopupContainer";
import { FaCommentDots } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import type { Participants } from "../../utils/types";

type ContactPopupProps = {
  contacts: Participants[];
  onClose: () => void;
};

export default function ContactPopup({ contacts, onClose }: ContactPopupProps) {
  return (
    <PopupContainer>
      <div className="p-6 pt-8 max-w-sm w-full">
        <div className="grid grid-cols-2 gap-y-10 text-center">
          {contacts.map((person, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-light text-sm">{person.role}</div>
              <div className="font-bold text-lg">{person.name}</div>
              <div className="flex justify-center gap-3 mt-3">
                <a
                  href={`tel:${person.phone}`}
                  aria-label="전화"
                  className="flex items-center justify-center"
                >
                  <FaPhoneAlt color="black" size={16} />
                </a>
                <a
                  href={`sms:${person.phone}`}
                  aria-label="문자"
                  className="flex items-center justify-center"
                >
                  <FaCommentDots color="black" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <Button
          className="mt-8"
          variant="default"
          size="default"
          onClick={onClose}
        >
          닫기
        </Button>
      </div>
    </PopupContainer>
  );
}
