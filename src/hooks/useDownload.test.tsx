import { renderHook } from "@testing-library/react";
import useDownload from "./useDownload";

describe("useDownload", () => {
  test("should download and save file", () => {
    const { result } = renderHook(() => useDownload("test", {}));
    const { download, progress, isLoading } = result.current;

    expect(download).toBeDefined();
    expect(typeof download).toBe("function");

    download();
  });
});
