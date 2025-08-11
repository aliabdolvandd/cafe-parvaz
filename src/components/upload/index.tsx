"use client";

import { useAuth } from "@/providers/authProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { IconProgress } from "@tabler/icons-react";
import { upload } from "@/api/client-api/upload";

type Props = {
  name: string;
  defaultValue?: string;
};

export default function SingleUpload({ name, defaultValue = "" }: Props) {
  const accessToken = useAuth();
  const [url, setUrl] = useState<string>("");
  const [progress, setProgress] = useState(0);

  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const image = e.target.files[0];
    const formData = new FormData();
    formData.set("image", image);
    setProgress(0);

    try {
      const res = await upload(formData, {
        onUploadProgress: (event) =>
          setProgress(Math.round((event.loaded / (event.total || 1)) * 100)),
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });

      setUrl(res.data.url);
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  useEffect(() => {
    if (defaultValue) setUrl(defaultValue);
  }, [defaultValue]);

  return (
    <div className="w-full space-y-2">
      {url && <input type="hidden" name={name} defaultValue={url} />}

      {url ? (
        <div className="w-full h-48 border rounded-lg overflow-hidden">
          <Image
            src={url}
            alt="Uploaded"
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div className="w-full h-48 border rounded-lg flex items-center justify-center text-gray-400">
          پیش‌نمایش تصویر
        </div>
      )}

      <Button asChild>
        <label className="cursor-pointer">
          انتخاب تصویر
          <input
            type="file"
            onChange={handleFileSelected}
            hidden
            accept="image/png, image/gif, image/jpeg"
          />
        </label>
      </Button>

      {progress > 0 && progress < 100 && (
        <IconProgress values={progress} className="h-2" />
      )}
    </div>
  );
}
